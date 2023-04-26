package com.example.braguia.model;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;


@Dao
public interface UserDao {

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    void insert(User name);

    // PUT E PATCH MAL FEITOS
    @Insert
    void put(User name);

    @Update
    void patch(User name);

    @Query("DELETE FROM user_table")
    void deleteAll();

    @Query("SELECT DISTINCT * FROM user_table")
    LiveData<List<User>> getUsers();
}
