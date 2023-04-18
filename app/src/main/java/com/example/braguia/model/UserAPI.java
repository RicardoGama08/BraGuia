package com.example.braguia.model;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.PATCH;
import retrofit2.http.PUT;

public interface UserAPI {

    @GET("user")
    Call<List<User>> getUsers();

    @PUT("user")
    Call<List<User>> putUser();

    @PATCH("user")
    Call<List<User>> patchUser();

}
