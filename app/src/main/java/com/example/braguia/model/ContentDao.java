package com.example.braguia.model;

import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;

import java.util.List;

@Dao
public interface ContentDao {

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(List<Content> cats);

    @Query("SELECT DISTINCT * FROM content_table")
    LiveData<List<Content>> getContent();

    @Query("DELETE FROM content_table")
    void deleteAll();
}