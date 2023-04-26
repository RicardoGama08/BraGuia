package com.example.braguia.model;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;
import com.google.gson.annotations.SerializedName;
import java.util.List;

@Entity(tableName = "pin_table",indices = @Index(value = {"id"},unique = true))
public class Pin {
    @PrimaryKey
    @NonNull
    //@SerializedName("id")
    @ColumnInfo(name = "id")
    Integer id;

    @SerializedName("pin_img")
    @ColumnInfo(name = "pin_img")
    String image_url;

    @ColumnInfo(name="localização")
    String localizacao;

    @ColumnInfo(name="descricao")
    String descricao;

    @ColumnInfo(name="propriedades")
    String propriedades;

    public Pin(@NonNull Integer id, String image_url, String localizacao, String descricao, String propriedades) {
        this.id = id;
        this.image_url = image_url;
        this.localizacao = localizacao;
        this.descricao = descricao;
        this.propriedades = propriedades;
    }

    public Pin(){
        this.image_url = "";
        this.localizacao = "";
        this.descricao = "";
        this.propriedades = "";
    }

    public Pin(List<Pin> pins) {
    }

    @NonNull
    public Integer getId() {
        return id;
    }

    public void setId(@NonNull Integer id) {
        this.id = id;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getPropriedades() {
        return propriedades;
    }

    public void setPropriedades(String propriedades) {
        this.propriedades = propriedades;
    }
}
