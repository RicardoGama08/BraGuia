package com.example.braguia.ui;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.annotation.SuppressLint;
import android.os.Bundle;

import com.example.braguia.R;
import com.example.braguia.model.Trail;

import java.util.ArrayList;
import java.util.List;

public class ListaTrailsActivity extends AppCompatActivity {

    private List<Trail> trails = new ArrayList<>();


    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.list_trails);

        RecyclerView recyclerView = findViewById(R.id.list);

        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        TrailsRecyclerViewAdapter myAdapter = new TrailsRecyclerViewAdapter(trails);
        recyclerView.setAdapter(myAdapter);

    }


}