package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.lifecycle.ViewModelProvider;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.braguia.R;
import com.example.braguia.viewmodel.PinViewModel;
import com.example.braguia.viewmodel.TrailViewModel;
import com.example.braguia.viewmodel.UserViewModel;

public class MainActivity extends AppCompatActivity {

    private static final int LOGIN_ACTIVITY_REQUEST_CODE = 1;
    private static final int REG_ACTIVITY_REQUEST_CODE = 1;

    //private UserViewModel mUserViewModel;
    //public static final int NEW_USER_ACTIVITY_REQUEST_CODE = 1;

    private TrailViewModel trailViewModel;
    private PinViewModel pinViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //Toolbar toolbar = findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);

        SharedPreferences sharedPreferences = getSharedPreferences("user_prefs", Context.MODE_PRIVATE);
        String username = sharedPreferences.getString("username", "");
        if (!username.isEmpty()) {
            // The user is already logged in, so navigate to the main activity
            Intent intent = new Intent(this, HomeActivity.class);
            startActivity(intent);
            finish();
        }

        trailViewModel = new ViewModelProvider(this).get(TrailViewModel.class);
        pinViewModel = new ViewModelProvider(this).get(PinViewModel.class);

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btLogin = (Button) findViewById(R.id.btLogin2);
        btLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, LoginActivity.class));
            }
        });

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btReg = (Button) findViewById(R.id.tReg);
        btReg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, RegisterActivity.class));;
            }
        });
    }
}