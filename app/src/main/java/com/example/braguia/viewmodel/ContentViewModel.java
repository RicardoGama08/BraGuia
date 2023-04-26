package com.example.braguia.viewmodel;

import android.app.Application;
import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import com.example.braguia.data.ContentRepository;
import com.example.braguia.model.Content;
import java.util.List;

public class ContentViewModel extends AndroidViewModel {

    private ContentRepository repository;

    public LiveData<List<Content>> content;

    public ContentViewModel(@NonNull Application application) {
        super(application);
        repository= new ContentRepository(application);

        content = repository.getAllContent();
    }

    public LiveData<List<Content>> getAllContent() {
        return content;
    }
}