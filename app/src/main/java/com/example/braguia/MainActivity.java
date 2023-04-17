package com.example.braguia;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.braguia.model.User;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class MainActivity extends AppCompatActivity {

    private static final int LOGIN_ACTIVITY_REQUEST_CODE = 1;
    private static final int REG_ACTIVITY_REQUEST_CODE = 1;

    private UserViewModel mUserViewModel;
    public static final int NEW_USER_ACTIVITY_REQUEST_CODE = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btLogin = (Button) findViewById(R.id.btLogin2);
        btLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setContentView(R.layout.activity_login);
            }
        });

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btReg = (Button) findViewById(R.id.tReg);
        btReg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setContentView(R.layout.activity_register);
            }
        });

        /*@SuppressLint({"MissingInflatedId", "LocalSuppress"}) RecyclerView recyclerView = findViewById(R.id.recyclerview);
        final UserListAdapter adapter = new UserListAdapter(new UserListAdapter.UserDiff());
        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        mUserViewModel = new ViewModelProvider(this).get(UserViewModel.class);
        mUserViewModel.getAllUsers().observe(this, users -> {
            adapter.submitList(users);
        });
        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener( view -> {
            Intent intent = new Intent(MainActivity.this, NewUserActivity.class);
            startActivityForResult(intent, NEW_USER_ACTIVITY_REQUEST_CODE);
        });*/

    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == LOGIN_ACTIVITY_REQUEST_CODE && resultCode == RESULT_OK) {
            //User user = new User(data.getStringExtra(NewUserActivity.EXTRA_REPLY));
            //mUserViewModel.insert(user);
            setContentView(R.layout.activity_login);
        } else if(requestCode == REG_ACTIVITY_REQUEST_CODE && resultCode == RESULT_OK){
            setContentView(R.layout.activity_register);
        }else{
            Toast.makeText(
                    getApplicationContext(),
                    R.string.empty_not_saved,
                    Toast.LENGTH_LONG).show();
        }
    }
}