package com.example.braguia;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class NewUser extends AppCompatActivity {

    public static final String EXTRA_REPLY = "com.example.android.userlistsql.REPLY";

    private EditText mEditUserView;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_new_user);
        mEditUserView = findViewById(R.id.edit_word);

        final Button button = findViewById(R.id.button_save);
        button.setOnClickListener(view -> {
            Intent replyIntent = new Intent();
            if (TextUtils.isEmpty(mEditUserView.getText())) {
                setResult(RESULT_CANCELED, replyIntent);
            } else {
                String user = mEditUserView.getText().toString();
                replyIntent.putExtra(EXTRA_REPLY, user);
                setResult(RESULT_OK, replyIntent);
            }
            finish();
        });
    }
}