package com.example.braguia.model;
import androidx.lifecycle.LiveData;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.OnConflictStrategy;
import androidx.room.Query;
import java.util.List;

@Dao
public interface PinDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(List<Pin> cats);

    @Query("SELECT DISTINCT * FROM pin_table")
    LiveData<List<Pin>> getPins();

    @Query("DELETE FROM pin_table")
    void deleteAll();
}