package com.example.braguia.model;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Header;

public interface PinAPI {

    @GET("pins")
    //Call<List<Pin>> getPins();
    Call<List<Pin>> getPins(@Header("Cookie") String cookieHeader);

    @GET("pin/id")
    Call<Pin> getPin();

}
