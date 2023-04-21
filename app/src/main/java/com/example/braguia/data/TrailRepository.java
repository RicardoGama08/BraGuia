package com.example.braguia.data;

import android.app.Application;
import android.os.AsyncTask;
import android.util.Log;
import androidx.lifecycle.LiveData;

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
    public LiveData<List<Trail>> allTrails;
    private GuideDatabase database;

    public TrailRepository(Application application){
        database = GuideDatabase.getDatabase(application);
        trailDao = database.trailDao();
        init();
        allTrails = trailDao.getTrails();
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
                .baseUrl("https://c5a2-193-137-92-29.eu.ngrok.io/trails/")
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
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<List<Trail>> call, Throwable t) {
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
