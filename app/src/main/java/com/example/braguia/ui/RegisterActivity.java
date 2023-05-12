package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.braguia.R;
import com.example.braguia.model.User;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class RegisterActivity extends AppCompatActivity {

    public static final String EXTRA_REPLY = "com.example.android.reglistsql.REPLY";
    private EditText mEditRegView;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btReg = (Button) findViewById(R.id.tReg);
        btReg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                TextView tlogin = (TextView) findViewById(R.id.tLogin);
                TextView tfirst = (TextView) findViewById(R.id.tFirst);
                TextView tlast = (TextView) findViewById(R.id.tLast);
                TextView temail = (TextView) findViewById(R.id.tEmail);
                TextView tSenha = (TextView) findViewById(R.id.tSenha);
                String login = tlogin.getText().toString();
                String first = tfirst.getText().toString();
                String last = tlast.getText().toString();
                String email = temail.getText().toString();
                String pass = tSenha.getText().toString();
                if(!login.isEmpty() && !pass.isEmpty() && !email.isEmpty() && !last.isEmpty() && !first.isEmpty()){
                    alert("Registo realizado com sucesso");
                    startActivity(new Intent(RegisterActivity.this, HomeActivity.class));
                }else{
                    alert("Registo incorreto");
                }

                SharedPreferences sharedPreferences = getSharedPreferences("user_prefs", Context.MODE_PRIVATE);
                SharedPreferences.Editor editor = sharedPreferences.edit();
                editor.putString("username", login);
                editor.putString("email", email);
                editor.putString("firstname", first);
                editor.putString("lastname", last);
                editor.apply();
            }
        });


        /*mEditRegView = findViewById(R.id.edit_reg);
        final Button button = findViewById(R.id.button_save);
        button.setOnClickListener(view -> {
            Intent replyIntent = new Intent();
            if (TextUtils.isEmpty(mEditRegView.getText())) {
                setResult(RESULT_CANCELED, replyIntent);
            } else {
                String user = mEditRegView.getText().toString();
                replyIntent.putExtra(EXTRA_REPLY, user);
                setResult(RESULT_OK, replyIntent);
            }
            finish();
        });*/
    }

    private void alert(String a){
        Toast.makeText(this,a, Toast.LENGTH_LONG).show();
    }
}