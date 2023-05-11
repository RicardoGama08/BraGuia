package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;

import com.example.braguia.R;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        //Toolbar toolbar = findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);

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
        }
        return super.onOptionsItemSelected(item);
    }
}