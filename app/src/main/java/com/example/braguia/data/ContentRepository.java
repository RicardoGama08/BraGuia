package com.example.braguia.data;

import android.app.Application;
import android.os.AsyncTask;
import android.util.Log;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;

import com.example.braguia.model.Content;
import com.example.braguia.model.ContentAPI;
import com.example.braguia.model.ContentDao;
import com.example.braguia.model.GuideDatabase;
import com.example.braguia.model.Pin;
import com.example.braguia.model.PinAPI;
import com.example.braguia.model.PinDao;
import com.example.braguia.model.Trail;
import com.example.braguia.model.TrailAPI;
import com.example.braguia.model.TrailDao;
import retrofit2.Call;
import java.util.List;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ContentRepository {

    public ContentDao contentDao;
    public MediatorLiveData<List<Content>> allContent;
    private GuideDatabase database;

    public ContentRepository(Application application){
        database = GuideDatabase.getDatabase(application);
        contentDao = database.contentDao();
        //init();
        allContent = new MediatorLiveData<>();
        allContent.addSource(
                contentDao.getContent(), localContent -> {
                    // TODO: ADD cache validation logic
                    if (localContent != null && localContent.size() > 0) {
                        allContent.setValue(localContent);
                    } else {
                        makeRequest();
                    }
                }
        );
    }

    public void insert(List<Content> content){
        new InsertAsyncTask(contentDao).execute(content);
    }

    public void init(){
        // TODO add cache validation strategy
        if(allContent == null || allContent.getValue() == null || allContent.getValue().isEmpty()){
            makeRequest();
        }
    }

    private void makeRequest() {
        Retrofit retrofit=new Retrofit.Builder()
                .baseUrl("https://c5a2-193-137-92-29.eu.ngrok.io/")
                //.baseUrl("http://192.168.85.186/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        ContentAPI api=retrofit.create(ContentAPI.class);
        Call<List<Content>> call=api.getContent();
        call.enqueue(new retrofit2.Callback<List<Content>>() {
            @Override
            public void onResponse(Call<List<Content>> call, Response<List<Content>> response) {
                if(response.isSuccessful()) {
                    insert(response.body());
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<List<Content>> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });
    }


    public LiveData<List<Content>> getAllContent(){
        return allContent;
    }
    private static class InsertAsyncTask extends AsyncTask<List<Content>,Void,Void> {
        private ContentDao contentDao;

        public InsertAsyncTask(ContentDao catDao) {
            this.contentDao=catDao;
        }

        @Override
        protected Void doInBackground(List<Content>... lists) {
            contentDao.insert(lists[0]);
            return null;
        }
    }

}