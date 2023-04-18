package com.example.braguia.viewmodel;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.example.braguia.data.TrailRepository;
import com.example.braguia.model.Trail;

import java.util.List;

public class TrailViewModel extends AndroidViewModel {

    private TrailRepository repository;

    public LiveData<List<Trail>> trails;

    public TrailViewModel(@NonNull Application application) {
        super(application);
        repository= new TrailRepository(application);

        trails = repository.getAllTrails();
    }

    public LiveData<List<Trail>> getAllTrails() {
        return trails;
    }
}
