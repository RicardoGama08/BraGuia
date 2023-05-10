package com.example.braguia.model;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;

import com.google.gson.annotations.SerializedName;


@Entity(tableName = "content_table",indices = @Index(value = {"id"},unique = true))
public class Content {

    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;

    @ColumnInfo(name="media_file")
    @SerializedName("media_file")
    String file;

    @ColumnInfo(name="media_type")
    @SerializedName("media_type")
    String type;

    @ColumnInfo(name="media_pin")
    @SerializedName("media_pin")
    Integer pin;

    public Content(){
        this.id = "";
        this.file = "";
        this.type = "";
        this.pin = null;
    }

    public Content(String id, String file, String type, Integer pin){
        this.id = id;
        this.type = type;
        this.file = file;
        this.pin = pin;
    }

    @NonNull
    public String getId() {
        return id;
    }

    public void setId(@NonNull String id) {
        this.id = id;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPin() {
        return pin;
    }

    public void setPin(Integer pin) {
        this.pin = pin;
    }
}
