package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.example.braguia.R;

import java.io.IOException;
import java.net.CookieManager;
import java.net.CookiePolicy;

import okhttp3.JavaNetCookieJar;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class HomeActivity extends AppCompatActivity {
    private OkHttpClient mOkHttpClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        CookieManager cookieManager = new CookieManager();
        cookieManager.setCookiePolicy(CookiePolicy.ACCEPT_ALL);
        mOkHttpClient = new OkHttpClient.Builder()
                .cookieJar(new JavaNetCookieJar(cookieManager))
                .build();

        /*Button logoutButton = findViewById(R.id.logout_button);
        logoutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new LogoutTask().execute();
            }
        });*/

        Button trails = (Button) findViewById(R.id.trails);
        trails.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //setContentView(R.layout.list_trails);
                Fragment trails = new TrailListFragment();
                FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
                fragmentTransaction.replace(R.id.container,trails).commit();
                //startActivity(new Intent(HomeActivity.this, ListaTrailsActivity.class));

            }
        });

        Button pins = (Button) findViewById(R.id.pins);
        pins.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //setContentView(R.layout.list_pins);
                Fragment pins = new PinListFragment();
                FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
                fragmentTransaction.replace(R.id.container,pins).commit();
                //startActivity(new Intent(HomeActivity.this, ListaPinsActivity.class));;

            }
        });
    }

    private class LogoutTask extends AsyncTask<Void, Void, Boolean> {
        @Override
        protected Boolean doInBackground(Void... params) {
            Request request = new Request.Builder()
                    .url("https://c5a2-193-137-92-29.eu.ngrok.io/logout")
                    .build();

            try (Response response = mOkHttpClient.newCall(request).execute()) {
                if (response.isSuccessful()) {
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
            if (success) {
                alert("Logout realizado com sucesso");
                startActivity(new Intent(HomeActivity.this, LoginActivity.class));
                finish();
            } else {
                Toast.makeText(HomeActivity.this, "Logout failed", Toast.LENGTH_SHORT).show();
            }
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            startActivity(new Intent(HomeActivity.this, DefinitionsActivity.class));
            return true;
        }else if(id == R.id.ver_perfil){
            startActivity(new Intent(HomeActivity.this, ProfileActivity.class));
            return true;
        }else if(id == R.id.logout){
            new LogoutTask().execute();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    private void alert(String a){
        Toast.makeText(this,a, Toast.LENGTH_LONG).show();
    }

}