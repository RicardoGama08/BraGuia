package com.example.braguia.data;

import android.app.Application;
import android.os.AsyncTask;
import android.util.Log;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;

import retrofit2.Call;
import java.util.List;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import com.example.braguia.model.Trail;
import com.example.braguia.model.User;
import com.example.braguia.model.UserAPI;
import com.example.braguia.model.UserDao;
import com.example.braguia.model.GuideDatabase;

public class UserRepository {
    private UserDao mUserDao;
    private MediatorLiveData<List<User>> mAllUsers;
    private GuideDatabase database;


    public UserRepository(Application application) {
        database = GuideDatabase.getDatabase(application);
        mUserDao = database.userDao();
        //init();
        mAllUsers = new MediatorLiveData<>();
        mAllUsers.addSource(
                mUserDao.getUsers(), localUsers -> {
                    // TODO: ADD cache validation logic
                    if (localUsers != null && localUsers.size() > 0) {
                        mAllUsers.setValue(localUsers);
                    } else {
                        makeRequest();
                    }
                }
        );
    }

    public LiveData<List<User>> getAllUsers() {
        return mAllUsers;
    }


    public void insert(User user) {
        GuideDatabase.databaseWriteExecutor.execute(() -> {
            mUserDao.insert(user);
        });
    }

    /*public void insert(List<User> users){
        new InsertAsyncTask(mUserDao).execute(users);
    }*/


    public void put(User user) {
        GuideDatabase.databaseWriteExecutor.execute(() -> {
            mUserDao.put(user);
        });
    }

    public void patch(User user){
        GuideDatabase.databaseWriteExecutor.execute(() -> {
            mUserDao.patch(user);
        });
    }

    public void init(){
        // TODO add cache validation strategy
        if(mAllUsers == null || mAllUsers.getValue() == null || mAllUsers.getValue().isEmpty()){
            makeRequest();
        }
    }

    private void makeRequest() {
        Retrofit retrofit=new Retrofit.Builder()
                .baseUrl("https://c5a2-193-137-92-29.eu.ngrok.io/")
                //.baseUrl("http://192.168.85.186/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        UserAPI api=retrofit.create(UserAPI.class);
        Call<List<User>> call=api.getUsers();
        Call<List<User>> call2=api.putUser();
        Call<List<User>> call3=api.patchUser();

        call.enqueue(new retrofit2.Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                if(response.isSuccessful()) {
                    insert((User) response.body());
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });

        call2.enqueue(new retrofit2.Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call2, Response<List<User>> response) {
                if(response.isSuccessful()) {
                    put((User) response.body());
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<List<User>> call2, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });

        call3.enqueue(new retrofit2.Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call3, Response<List<User>> response) {
                if(response.isSuccessful()) {
                    patch((User) response.body());
                }
                else{
                    Log.e("main", "onFailure: "+response.errorBody());
                }
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                Log.e("main", "onFailure: " + t.getMessage());
            }
        });
    }

    private static class InsertAsyncTask extends AsyncTask<List<User>,Void,Void> {
        private UserDao userDao;

        public InsertAsyncTask(UserDao catDao) {
            this.userDao=catDao;
        }

        @Override
        protected Void doInBackground(List<User>... lists) {
            userDao.insert((User) lists[0]);
            return null;
        }
    }

}
