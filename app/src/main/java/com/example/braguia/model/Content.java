package com.example.braguia.model;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;


@Entity(tableName = "content_table",indices = @Index(value = {"id"},unique = true))
public class Content {

    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;

    @ColumnInfo(name="file")
    String file;

    @ColumnInfo(name="tipo")
    String type;

    public Content(){
        this.id = "";
        this.file = "";
        this.type = "";
    }

    public Content(String id, String file, String type){
        this.id = id;
        this.type = type;
        this.file = file;
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
}
