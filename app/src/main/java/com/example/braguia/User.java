package com.example.braguia;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "user_table")
public class User {

    @PrimaryKey(autoGenerate = true)
    private int id;
    @NonNull
    @ColumnInfo(name = "user")
    private String user;

    public User(@NonNull String name) {this.user = name;}

    public User(String user, int id){
        this.user = user;
        this.id = id;
    }

    public User() {
        this.user = "";
        this.id = 0;
    }

    public String getUser(){return this.user;}

    public void setUser(@NonNull String user) {
        this.user = user;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}