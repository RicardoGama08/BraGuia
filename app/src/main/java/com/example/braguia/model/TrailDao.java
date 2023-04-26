package com.example.braguia.model;

import android.view.textclassifier.SelectionEvent;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MediatorLiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import java.util.List;

@Dao
public interface TrailDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(List<Trail> cats);

    @Query("SELECT DISTINCT * FROM trail_table")
    LiveData<List<Trail>> getTrails();

    @Query("DELETE FROM trail_table")
    void deleteAll();

    //@Query("SELECT id FROM trail_table")
    //LiveData<Trail> getTrail(Integer id);
}