package com.example.braguia.data;

import android.app.Application;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.TextView;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;
import com.example.braguia.R;
import com.example.braguia.model.GuideDatabase;
import com.example.braguia.model.Trail;
import com.example.braguia.model.TrailAPI;
import com.example.braguia.model.TrailDao;
import retrofit2.Call;
import java.util.List;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class TrailRepository {

    public TrailDao trailDao;
    public MediatorLiveData<List<Trail>> allTrails;
    private GuideDatabase database;
    private MediatorLiveData<Trail> trail;

    public TrailRepository(Application application){
        database = GuideDatabase.getDatabase(application);
        trailDao = database.trailDao();
        //init();
        allTrails = new MediatorLiveData<>();
        allTrails.addSource(
                trailDao.getTrails(), localTrails -> {
                    // TODO: ADD cache validation logic
                    if (localTrails != null && localTrails.size() > 0) {
                        allTrails.setValue(localTrails);
                    } else {
                        makeRequest();
                    }
                }
        );
        /*trail = new MediatorLiveData<>();
        trail.addSource(
                trailDao.getTrail(trail.getValue().getId()),localTrail -> {
                    if(localTrail != null)
                        trail.setValue(localTrail);
                    else makeRequest();
                }
        );*/
        //trail = trailDao.getTrail(trail.getValue().getId());
    }

    public void insert(List<Trail> trails){
        new InsertAsyncTask(trailDao).execute(trails);
    }

    public void init(){
        // TODO add cache validation strategy
        if(allTrails == null || allTrails.getValue() == null || allTrails.getValue().isEmpty()){
            makeRequest();
        }
    }

    private void makeRequest() {
        Retrofit retrofit=new Retrofit.Builder()
                .baseUrl("https://c5a2-193-137-92-29.eu.ngrok.io/")
                //.baseUrl("http://192.168.85.186/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        TrailAPI api=retrofit.create(TrailAPI.class);
        Call<List<Trail>> call=api.getTrails();
        call.enqueue(new retrofit2.Callback<List<Trail>>() {
            @Override
            public void onResponse(Call<List<Trail>> call, Response<List<Trail>> response) {
                if(response.isSuccessful()) {
                    insert(response.body());

                    /*List<Trail> trails = response.body();
                    TextView myTextView = findViewById(R.id.desc);
                    myTextView.setText(trails.get(0).getId());*/
                }
                else{
                    String contentType = response.headers().get("content-type");
                    if (contentType != null && contentType.contains("text/html")) {
                        // handle HTML error response
                        Log.e("main", "Error response: " + response.code() + " " + response.message());
                    } else {
                        // handle other error response
                        Log.e("main", "Error response: " + response.code() + " " + response.message() + " " + response.errorBody());
                    }
                }
            }

            @Override
            public void onFailure(Call<List<Trail>> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });

        Call<Trail> call2=api.getTrail();
        call2.enqueue(new retrofit2.Callback<Trail>() {
            @Override
            public void onResponse(Call<Trail> call, Response<Trail> response) {
                if(response.isSuccessful()) {
                    insert((List<Trail>) response.body());
                }
                else{
                    String contentType = response.headers().get("content-type");
                    if (contentType != null && contentType.contains("text/html")) {
                        // handle HTML error response
                        Log.e("main", "Error response: " + response.code() + " " + response.message());
                    } else {
                        // handle other error response
                        Log.e("main", "Error response: " + response.code() + " " + response.message() + " " + response.errorBody());
                    }
                }
            }

            @Override
            public void onFailure(Call<Trail> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });
    }


    public LiveData<List<Trail>> getAllTrails(){
        return allTrails;
    }
    private static class InsertAsyncTask extends AsyncTask<List<Trail>,Void,Void> {
        private TrailDao trailDao;

        public InsertAsyncTask(TrailDao catDao) {
            this.trailDao=catDao;
        }

        @Override
        protected Void doInBackground(List<Trail>... lists) {
            trailDao.insert(lists[0]);
            return null;
        }
    }

}
