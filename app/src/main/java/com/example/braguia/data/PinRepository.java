package com.example.braguia.data;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.util.Log;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;
import com.example.braguia.model.GuideDatabase;
import com.example.braguia.model.Pin;
import com.example.braguia.model.PinAPI;
import com.example.braguia.model.PinDao;
import retrofit2.Call;
import java.util.List;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class PinRepository {

    public PinDao pinDao;
    public MediatorLiveData<List<Pin>> allPins;
    private GuideDatabase database;
    //private MediatorLiveData<Pin> pin;

    public PinRepository(Application application){


        SharedPreferences sharedPreferences = application.getSharedPreferences("cookies", Context.MODE_PRIVATE);
        String csrftoken = sharedPreferences.getString("csrftoken", null);
        String sessionid = sharedPreferences.getString("sessionid", null);

        database = GuideDatabase.getDatabase(application);
        pinDao = database.pinDao();
        allPins = new MediatorLiveData<>();
        allPins.addSource(
                pinDao.getPins(), localPins -> {
                    // TODO: ADD cache validation logic
                    if (localPins != null && localPins.size() > 0) {
                        allPins.setValue(localPins);
                    } else {
                        makeRequest(csrftoken, sessionid);
                    }
                }
        );
        /*pin = new MediatorLiveData<>();
        pin.addSource(
                pinDao.getPin(pin.getValue().getId()),localPin -> {
                    if(localPin != null)
                        pin.setValue(localPin);
                    else makeRequest();
                }
        );*/
        //pin = pinDao.getPin(pin.getValue().getId());
    }

    public void insert(List<Pin> pins){
        new InsertAsyncTask(pinDao).execute(pins);
    }

    private void makeRequest(String csrftoken, String sessionid) {
        Retrofit retrofit=new Retrofit.Builder()
                .baseUrl("https://c5a2-193-137-92-29.eu.ngrok.io/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        String cookieHeader = csrftoken + "; " + sessionid;

        PinAPI api=retrofit.create(PinAPI.class);
        Call<List<Pin>> call=api.getPins(cookieHeader);
        call.enqueue(new retrofit2.Callback<List<Pin>>() {
            @Override
            public void onResponse(Call<List<Pin>> call, Response<List<Pin>> response) {
                if(response.isSuccessful()) {
                    insert(response.body());
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
            public void onFailure(Call<List<Pin>> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });

        /*Call<Pin> call2=api.getPin();
        call2.enqueue(new retrofit2.Callback<Pin>() {
            @Override
            public void onResponse(Call<Pin> call, Response<Pin> response) {
                if(response.isSuccessful()) {
                    insert((List<Pin>) response.body());
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<Pin> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });*/
    }


    public LiveData<List<Pin>> getAllPins(){
        return allPins;
    }
    private static class InsertAsyncTask extends AsyncTask<List<Pin>,Void,Void> {
        private PinDao pinDao;

        public InsertAsyncTask(PinDao catDao) {
            this.pinDao=catDao;
        }

        @Override
        protected Void doInBackground(List<Pin>... lists) {
            pinDao.insert(lists[0]);
            return null;
        }
    }

}
