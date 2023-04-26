package com.example.braguia.model;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ContentAPI {

    @GET("content")
    Call<List<Content>> getContent();

}
