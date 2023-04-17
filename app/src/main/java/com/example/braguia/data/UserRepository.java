package com.example.braguia.data;

import android.app.Application;

import androidx.lifecycle.LiveData;

import com.example.braguia.User;
import com.example.braguia.UserDao;
import com.example.braguia.UserDatabase;

import java.util.List;

public class UserRepository {
    private UserDao mUserDao;
    private LiveData<List<User>> mAllUsers;

    public UserRepository(Application application) {
        UserDatabase db = UserDatabase.getDatabase(application);
        mUserDao = db.userDao();
        mAllUsers = mUserDao.getAlphabetizedWords();
    }

    // Room executes all queries on a separate thread.
    // Observed LiveData will notify the observer when the data has changed.
    public LiveData<List<User>> getAllUsers() {
        return mAllUsers;
    }

    // You must call this on a non-UI thread or your app will throw an exception. Room ensures
    // that you're not doing any long running operations on the main thread, blocking the UI.
    public void insert(User word) {
        UserDatabase.databaseWriteExecutor.execute(() -> {
            mUserDao.insert(word);
        });
    }
}
