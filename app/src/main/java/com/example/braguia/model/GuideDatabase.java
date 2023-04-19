package com.example.braguia.model;

import android.content.Context;
import android.os.AsyncTask;

import androidx.annotation.NonNull;
import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverter;
import androidx.room.TypeConverters;
import androidx.sqlite.db.SupportSQLiteDatabase;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import retrofit2.Converter;

@Database(entities = {User.class,Trail.class,Pin.class}, version = 1, exportSchema = false)
public abstract class GuideDatabase extends RoomDatabase {

    public abstract UserDao userDao();
    public abstract TrailDao trailDao();
    public abstract PinDao pinDao();
    private static volatile GuideDatabase INSTANCE;
    private static final int NUMBER_OF_THREADS = 4;
    public static final ExecutorService databaseWriteExecutor =
            Executors.newFixedThreadPool(NUMBER_OF_THREADS);

    public static GuideDatabase getDatabase(final Context context) {
        if (INSTANCE == null) {
            synchronized (GuideDatabase.class) {
                if (INSTANCE == null) {
                    INSTANCE = Room.databaseBuilder(context.getApplicationContext(),
                                    GuideDatabase.class, "guide_database").addCallback(callback)
                            .build();
                }
            }
        }
        return INSTANCE;
    }

    /*private static RoomDatabase.Callback sRoomDatabaseCallback = new RoomDatabase.Callback() {
        @Override
        public void onCreate(@NonNull SupportSQLiteDatabase db) {
            super.onCreate(db);

            // If you want to keep data through app restarts,
            // comment out the following block
            databaseWriteExecutor.execute(() -> {
                // Populate the database in the background.
                // If you want to start with more words, just add them.
                UserDao dao = INSTANCE.userDao();
                dao.deleteAll();

                User user = new User("Ricardo Gama");
                dao.insert(user);
                user = new User("Francisco");
                dao.insert(user);
            });
        }
    };*/

    public static Callback callback = new Callback() {
        @Override
        public void onOpen(@NonNull SupportSQLiteDatabase db) {
            super.onOpen(db);
            new PopulateDbAsyn(INSTANCE);
        }
    };

    static  class  PopulateDbAsyn extends AsyncTask<Void,Void,Void>{
        private UserDao userdao;
        private TrailDao traildao;
        private PinDao pindao;

        public PopulateDbAsyn(GuideDatabase catDatabase)
        {
            pindao= catDatabase.pinDao();
            userdao=catDatabase.userDao();
            traildao=catDatabase.trailDao();
        }
        @Override
        protected Void doInBackground(Void... voids) {
            userdao.deleteAll();
            traildao.deleteAll();
            pindao.deleteAll();
            return null;
        }
    }
}
