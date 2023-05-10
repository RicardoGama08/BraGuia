package com.example.braguia.model;

import android.os.Parcel;
import android.os.Parcelable;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;
import com.google.gson.annotations.SerializedName;
import java.util.List;

@Entity(tableName = "pin_table",indices = @Index(value = {"id"},unique = true))
public class Pin implements Parcelable {
    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    String id;
    @SerializedName("pin_img")
    @ColumnInfo(name = "pin_img")
    String image_url;
    @SerializedName("pin_name")
    @ColumnInfo(name = "pin_name")
    String name;
    @SerializedName("pin_desc")
    @ColumnInfo(name = "pin_desc")
    String desc;
    @SerializedName("pin_lat")
    @ColumnInfo(name = "pin_lat")
    Double lat;
    @SerializedName("pin_lng")
    @ColumnInfo(name = "pin_lng")
    Double lng;
    @SerializedName("pin_alt")
    @ColumnInfo(name = "pin_alt")
    float alt;

    @SerializedName("rel_pin")
    @ColumnInfo(name = "rel_pin")
    List<Property> rel_pin;

    @SerializedName("media")
    @ColumnInfo(name = "media")
    List<Content> media;

    public Pin(@NonNull String id, String image_url, String propriedades) {
        this.id = id;
        this.image_url = image_url;
    }

    public Pin(){
        this.image_url = "";
    }

    public Pin(List<Pin> pins) {
    }

    protected Pin(Parcel in) {
        id = in.readString();
        name = in.readString();
        //image_url = in.read();
        //in.readStringArray(alternatives);
    }

    @NonNull
    public String getId() {
        return id;
    }

    public void setId(@NonNull String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public float getAlt() {
        return alt;
    }

    public void setAlt(float alt) {
        this.alt = alt;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String descricao) {
        this.desc = descricao;
    }

    public List<Content> getMedia() {
        return media;
    }

    public void setMedia(List<Content> media) {
        this.media = media;
    }

    public static Parcelable.Creator<Pin> getCREATOR() {
        return CREATOR;
    }

    /*public String getAnswer() {
        return this.alternatives.length > 0 ? this.alternatives[0] : null;
    }*/

    public static final Parcelable.Creator<Pin> CREATOR = new Parcelable.Creator<Pin>() {

        @Override
        public Pin createFromParcel(Parcel in) {
            return new Pin(in);
        }

        @Override
        public Pin[] newArray(int size) {
            return new Pin[size];
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
        //parcel.writeInt(imageId);
        //parcel.writeStringArray(alternatives);
    }

    public String createMapLink() {
        String link = "https://www.google.com/maps/@"
                + this.lat + ","
                + this.lng + ","
                + "18z" + ","
                + this.alt + "m";
        return link;
    }
}
