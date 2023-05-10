package com.example.braguia.model;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.PrimaryKey;
import com.google.gson.annotations.SerializedName;

public class Edges {

    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;

    @ColumnInfo(name = "edge_transport")
    @SerializedName("edge_transport")
    String edge_transport;

    @ColumnInfo(name = "edge_duration")
    @SerializedName("edge_duration")
    Integer edge_duration;

    @ColumnInfo(name = "edge_desc")
    @SerializedName("edge_desc")
    String edge_desc;

    @ColumnInfo(name = "edge_trail")
    @SerializedName("edge_trail")
    Integer trail;

    @ColumnInfo(name = "edge_start")
    @SerializedName("edge_end")
    Pin edge_start;

    @ColumnInfo(name = "edge_end")
    @SerializedName("edge_en")
    Pin edge_end;

    @NonNull
    public String getId() {
        return id;
    }

    public void setId(@NonNull String id) {
        this.id = id;
    }

    public String getEdge_transport() {
        return edge_transport;
    }

    public void setEdge_transport(String edge_transport) {
        this.edge_transport = edge_transport;
    }

    public Integer getEdge_duration() {
        return edge_duration;
    }

    public void setEdge_duration(Integer edge_duration) {
        this.edge_duration = edge_duration;
    }

    public String getEdge_desc() {
        return edge_desc;
    }

    public void setEdge_desc(String edge_desc) {
        this.edge_desc = edge_desc;
    }

    public Integer getTrail() {
        return trail;
    }

    public void setTrail(Integer trail) {
        this.trail = trail;
    }

    public Pin getEdge_start() {
        return edge_start;
    }

    public void setEdge_start(Pin edge_start) {
        this.edge_start = edge_start;
    }

    public Pin getEdge_end() {
        return edge_end;
    }

    public void setEdge_end(Pin edge_end) {
        this.edge_end = edge_end;
    }
}
