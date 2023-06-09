package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import android.annotation.SuppressLint;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import com.example.braguia.R;
import java.io.IOException;
import java.net.HttpCookie;
import java.util.List;
import okhttp3.FormBody;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.JavaNetCookieJar;
import java.net.CookieManager;
import java.net.CookiePolicy;

public class LoginActivity extends AppCompatActivity {
    private OkHttpClient mOkHttpClient;

    private class LoginTask extends AsyncTask<String, Void, Boolean> {
        private ProgressDialog progressDialog;
        private final CookieManager cookieManager;

        private String csrftoken;
        private String sessionid;

        public LoginTask(CookieManager cookieManager) {
            this.cookieManager = cookieManager;
        }
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            progressDialog = new ProgressDialog(LoginActivity.this);
            progressDialog.setMessage("Logging in...");
            progressDialog.setCancelable(false);
            progressDialog.show();
        }

        @Override
        protected Boolean doInBackground(String... params) {
            String login = params[0];
            String pass = params[1];

            RequestBody formBody = new FormBody.Builder()
                    .add("username", login)
                    .add("password", pass)
                    .build();

            Request request = new Request.Builder()
                    .url("https://c5a2-193-137-92-29.eu.ngrok.io/login")
                    .post(formBody)
                    .build();

            try (Response response = mOkHttpClient.newCall(request).execute()) {
                if (response.isSuccessful()) {
                    Headers headers = response.headers();
                    List<String> cookies = headers.values("Set-Cookie");
                    for (String cookie : cookies) {
                        if (cookie.startsWith("csrftoken")) {
                            csrftoken = cookie.split(";")[0];
                            cookieManager.getCookieStore().add(null, HttpCookie.parse(csrftoken).get(0));
                        }
                        if (cookie.startsWith("sessionid")) {
                            sessionid = cookie.split(";")[0];
                            cookieManager.getCookieStore().add(null, HttpCookie.parse(sessionid).get(0));
                        }
                    }

                    SharedPreferences sharedPreferences = getSharedPreferences("cookies", Context.MODE_PRIVATE);
                    SharedPreferences.Editor editor = sharedPreferences.edit();

                    editor.putString("csrftoken", csrftoken);
                    editor.putString("sessionid", sessionid);
                    editor.apply();

                    return true;
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            return false;
        }
        @Override
        protected void onPostExecute(Boolean success) {
            super.onPostExecute(success);
            progressDialog.dismiss();
            if (success) {
                alert("Login realizado com sucesso");
                Intent intent = new Intent(LoginActivity.this, HomeActivity.class);
                intent.putExtra("csrftoken", csrftoken);
                intent.putExtra("sessionid", sessionid);
                startActivity(intent);
            } else {
                alert("Login ou senha incorreta");
            }
        }
    }

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        CookieManager cookieManager = new CookieManager();
        cookieManager.setCookiePolicy(CookiePolicy.ACCEPT_ALL);
        mOkHttpClient = new OkHttpClient.Builder()
                .cookieJar(new JavaNetCookieJar(cookieManager))
                .build();

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button btLogin = (Button) findViewById(R.id.btLogin2);
        btLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                TextView tLogin = (TextView) findViewById(R.id.tLogin);
                TextView tSenha = (TextView) findViewById(R.id.tSenha);
                String login = tLogin.getText().toString();
                String pass = tSenha.getText().toString();
                if(login.equals("premium_user") && pass.equals("paiduser")){
                    alert("Login realizado com sucesso");
                }
                else if(login.equals("standard_user") && pass.equals("cheapuser")){
                    alert("Login realizado com sucesso");
                }else{
                    alert("Login ou senha incorreta");
                    return;
                }
                LoginTask loginTask = new LoginTask(cookieManager);
                loginTask.execute(login, pass);

                SharedPreferences sharedPreferences = getSharedPreferences("user_prefs", Context.MODE_PRIVATE);
                SharedPreferences.Editor editor = sharedPreferences.edit();
                editor.putString("username", login);
                editor.apply();
            }
        });
    }

    private void alert(String a){
        Toast.makeText(this,a, Toast.LENGTH_LONG).show();
    }
}