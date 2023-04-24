package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.braguia.R;
import com.example.braguia.viewmodel.TrailViewModel;
import com.example.braguia.viewmodel.UserViewModel;

public class MainActivity extends AppCompatActivity {

    private static final int LOGIN_ACTIVITY_REQUEST_CODE = 1;
    private static final int REG_ACTIVITY_REQUEST_CODE = 1;

    //private UserViewModel mUserViewModel;
    //public static final int NEW_USER_ACTIVITY_REQUEST_CODE = 1;

    private TrailViewModel trailViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        trailViewModel = new ViewModelProvider(this).get(TrailViewModel.class);

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

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
}