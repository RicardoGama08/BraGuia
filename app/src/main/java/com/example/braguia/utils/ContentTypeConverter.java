package com.example.braguia.utils;

import androidx.room.TypeConverter;

import com.example.braguia.model.Content;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.List;

public class ContentTypeConverter {
    private static final Gson gson = new Gson();

    @TypeConverter
    public static List<Content> fromString(String value) {
        Type listType = new TypeToken<List<Content>>() {}.getType();
        return gson.fromJson(value, listType);
    }

    @TypeConverter
    public static String fromList(List<Content> list) {
        return gson.toJson(list);
    }
}
