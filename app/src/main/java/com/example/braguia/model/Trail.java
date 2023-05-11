package com.example.braguia.model;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;
import androidx.room.TypeConverters;
import com.example.braguia.utils.EdgesTypeConverter;
import com.example.braguia.utils.PropertyListConverter;
import com.google.gson.annotations.SerializedName;
import java.util.List;
import java.util.Objects;

@Entity(tableName = "trail_table",indices = @Index(value = {"id"},unique = true))
@TypeConverters({PropertyListConverter.class, EdgesTypeConverter.class})
public class Trail implements Parcelable{

    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;

    @SerializedName("trail_img")
    @ColumnInfo(name = "trail_img")
    String image_url;

    @ColumnInfo(name = "trail_name")
    @SerializedName("trail_name")
    String name;

    @ColumnInfo(name = "trail_desc")
    @SerializedName("trail_desc")
    String desc;

    @ColumnInfo(name = "trail_duration")
    @SerializedName("trail_duration")
    Double duration;

    @ColumnInfo(name = "trail_difficulty")
    @SerializedName("trail_difficulty")
    String difficulty;

    @ColumnInfo(name = "rel_trail")
    @SerializedName("rel_trail")
    List<Property> rel_trail;

    @ColumnInfo(name = "edges")
    @SerializedName("edges")
    List<Edges> edges;

    //public String [] alternatives;

    public Trail(@NonNull String id, String image_url) {
        this.id = id;
        this.image_url = image_url;
        //this.alternatives = new String[4];
    }

    public Trail(List<Trail> trails) {

    }

    protected Trail(Parcel in) {
        id = in.readString();
        name = in.readString();
        difficulty = in.readString();
        //image_url = in.read();
        //in.readStringArray(alternatives);
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Double getDuration() {
        return duration;
    }

    public void setDuration(Double duration) {
        this.duration = duration;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return image_url;
    }

    public void setUrl(String url) {
        this.image_url = url;
    }

    public List<Edges> getEdges() {
        return edges;
    }

    public void setEdges(List<Edges> edges) {
        this.edges = edges;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trail trail = (Trail) o;
        return id.equals(trail.id) &&
                Objects.equals(image_url, trail.image_url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, image_url);
    }

    /*public String[] getAlternatives() {
        return alternatives;
    }

    public void setAlternatives(String[] alternatives) {
        this.alternatives = alternatives;
    }*/

    public static Parcelable.Creator<Trail> getCREATOR() {
        return CREATOR;
    }

    /*public String getAnswer() {
        return this.alternatives.length > 0 ? this.alternatives[0] : null;
    }*/

    public static final Parcelable.Creator<Trail> CREATOR = new Parcelable.Creator<Trail>() {

        @Override
        public Trail createFromParcel(Parcel in) {
            return new Trail(in);
        }

        @Override
        public Trail[] newArray(int size) {
            return new Trail[size];
        }
    };

    @Override
    public String toString() {
        return name + id;
    }

    public int describeContents() {
        return 0;
    }

    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(id);
        parcel.writeString(name);
        parcel.writeString(difficulty);
        //parcel.writeInt(imageId);
        //parcel.writeStringArray(alternatives);
    }

}
