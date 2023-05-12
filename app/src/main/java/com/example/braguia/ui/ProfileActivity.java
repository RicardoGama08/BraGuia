package com.example.braguia.ui;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import com.example.braguia.R;

public class ProfileActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.profile);

        SharedPreferences sharedPreferences = getSharedPreferences("user_prefs", Context.MODE_PRIVATE);
        String username = sharedPreferences.getString("username", "");
        String email = sharedPreferences.getString("email", "");
        String firstname = sharedPreferences.getString("firstname", "");
        String lastname = sharedPreferences.getString("lastname", "");

        TextView usernameTextView = findViewById(R.id.tLogin);
        TextView emailTextView = findViewById(R.id.tEmail);
        TextView firstnameTextView = findViewById(R.id.tFirst);
        TextView lastnameTextView = findViewById(R.id.tLast);

        usernameTextView.setText(username);
        emailTextView.setText(email);
        firstnameTextView.setText(firstname);
        lastnameTextView.setText(lastname);

    }
}
