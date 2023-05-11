package com.example.braguia.utils;

import androidx.room.TypeConverter;

import com.example.braguia.model.Edges;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.List;

public class EdgesTypeConverter {

    @TypeConverter
    public static String fromEdgesList(List<Edges> edges) {
        if (edges == null) {
            return null;
        }
        Gson gson = new Gson();
        Type type = new TypeToken<List<Edges>>() {}.getType();
        return gson.toJson(edges, type);
    }

    @TypeConverter
    public static List<Edges> toEdgesList(String edgesJson) {
        if (edgesJson == null) {
            return null;
        }
        Gson gson = new Gson();
        Type type = new TypeToken<List<Edges>>() {}.getType();
        return gson.fromJson(edgesJson, type);
    }
}



