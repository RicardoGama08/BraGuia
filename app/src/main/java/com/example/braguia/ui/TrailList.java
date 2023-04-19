package com.example.braguia.ui;

import android.content.Context;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import com.example.braguia.R;
import com.example.braguia.model.Trail;
import com.example.braguia.viewmodel.TrailViewModel;

import java.util.ArrayList;
import java.util.List;

public class TrailList extends Fragment {
    private static final String ARG_COLUMN_COUNT = "column-count";
    private int mColumnCount = 1;
    private TrailViewModel trailViewModel;
    private List<Trail> trails = new ArrayList<>();

    public TrailList() {
    }

    // TODO: Customize parameter initialization
    @SuppressWarnings("unused")
    public static TrailList newInstance(int columnCount) {
        TrailList fragment = new TrailList();
        Bundle args = new Bundle();
        args.putInt(ARG_COLUMN_COUNT, columnCount);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getArguments() != null) {
            mColumnCount = getArguments().getInt(ARG_COLUMN_COUNT);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_item_list, container, false);

        trailViewModel = new ViewModelProvider(this).get(TrailViewModel.class);
        trailViewModel.getAllTrails().observe(getViewLifecycleOwner(), x -> {
            this.trails.clear();
            this.trails.addAll(x);
            loadRecyclerView(view);
        });
        return view;
    }

    private void loadRecyclerView(View view){
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            RecyclerView recyclerView = (RecyclerView) view;
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }
            recyclerView.setAdapter(new TrailListAdapter(trails));
        }
    }

    @Override
    public void onPause() {
        super.onPause();
    }

}