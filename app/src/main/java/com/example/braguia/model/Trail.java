package com.example.braguia.model;


import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;

import com.google.gson.annotations.SerializedName;

import java.util.List;
import java.util.Objects;

@Entity(tableName = "trail_table",indices = @Index(value = {"id"},unique = true))
public class Trail{

    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;

    @SerializedName("trail_img")
    @ColumnInfo(name = "trail_img")
    String image_url;

    @ColumnInfo(name = "trail_name")
    @SerializedName("trail_name")
    String name;

    public Trail(@NonNull String id, String image_url) {
        this.id = id;
        this.image_url = image_url;
    }

    public Trail(List<Trail> trails) {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return image_url;
    }

    public void setUrl(String url) {
        this.image_url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trail trail = (Trail) o;
        return id.equals(trail.id) &&
                Objects.equals(image_url, trail.image_url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, image_url);
    }

    @Override
    public String toString() {
        return "Trail{" +
                "id=" + this.id +
                '}';
    }

}
