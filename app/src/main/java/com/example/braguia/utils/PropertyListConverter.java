package com.example.braguia.utils;

import androidx.room.TypeConverter;

import com.example.braguia.model.Property;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.List;

public class PropertyListConverter {

    @TypeConverter
    public static List<Property> fromJson(String value) {
        Type listType = new TypeToken<List<Property>>(){}.getType();
        return new Gson().fromJson(value, listType);
    }

    @TypeConverter
    public static String toJson(List<Property> list) {
        Gson gson = new Gson();
        return gson.toJson(list);
    }
}
