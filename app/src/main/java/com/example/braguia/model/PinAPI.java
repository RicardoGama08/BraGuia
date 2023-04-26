package com.example.braguia.model;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface PinAPI {

    @GET("pins")
    Call<List<Pin>> getPins();

    @GET("pin/id")
    Call<Pin> getPin();

}
