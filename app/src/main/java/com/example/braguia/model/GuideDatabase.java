package com.example.braguia.model;

import android.content.Context;
import android.os.AsyncTask;
import androidx.annotation.NonNull;
import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.sqlite.db.SupportSQLiteDatabase;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Database(entities = {User.class,Trail.class,Pin.class,Content.class}, version = 10, exportSchema = false)
public abstract class GuideDatabase extends RoomDatabase {

    public abstract UserDao userDao();
    public abstract TrailDao trailDao();
    public abstract PinDao pinDao();
    public abstract ContentDao contentDao();
    private static volatile GuideDatabase INSTANCE;
    private static final int NUMBER_OF_THREADS = 4;
    public static final ExecutorService databaseWriteExecutor =
            Executors.newFixedThreadPool(NUMBER_OF_THREADS);

    public static GuideDatabase getDatabase(Context context) {
        if (INSTANCE == null) {
            synchronized (GuideDatabase.class) {
                if (INSTANCE == null) {
                    INSTANCE = Room.databaseBuilder(context, GuideDatabase.class, "guide_database")
                            .fallbackToDestructiveMigration()
                            .addCallback(callback)
                            .build();
                }
            }
        }
        return INSTANCE;
    }

    public static Callback callback = new Callback() {
        @Override
        public void onOpen(@NonNull SupportSQLiteDatabase db) {
            super.onOpen(db);
            new PopulateDbAsyn(INSTANCE);
        }
    };

    static  class  PopulateDbAsyn extends AsyncTask<Void,Void,Void>{
        private UserDao userdao;
        private ContentDao contentDao;
        private TrailDao traildao;
        private PinDao pindao;

        public PopulateDbAsyn(GuideDatabase catDatabase)
        {
            pindao= catDatabase.pinDao();
            userdao=catDatabase.userDao();
            traildao=catDatabase.trailDao();
            contentDao=catDatabase.contentDao();
        }
        @Override
        protected Void doInBackground(Void... voids) {
            userdao.deleteAll();
            traildao.deleteAll();
            pindao.deleteAll();
            contentDao.deleteAll();
            return null;
        }
    }
}
