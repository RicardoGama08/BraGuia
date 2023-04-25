package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

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
                //setContentView(R.layout.fragment_item_list);
                //Fragment trails = new TrailListFragment();
                //FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
                //fragmentTransaction.replace(R.id.container,trails).commit();
                startActivity(new Intent(HomeActivity.this, ListaTrailsActivity.class));;

            }
        });

        Button pins = (Button) findViewById(R.id.pins);
        pins.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //setContentView(R.layout.fragment_item_list2);
                //Fragment pins = new PinListFragment();
                //FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
                //fragmentTransaction.replace(R.id.container,pins).commit();
                startActivity(new Intent(HomeActivity.this, ListaPinsActivity.class));;

            }
        });
    }
}