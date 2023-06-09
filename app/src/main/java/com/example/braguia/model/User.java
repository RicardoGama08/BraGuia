package com.example.braguia.model;

import androidx.annotation.NonNull;
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(tableName = "user_table")
public class User {

    @PrimaryKey
    @NonNull
    @ColumnInfo(name = "user")
    private String user;
    @ColumnInfo(name = "firstname")
    private String firstName;
    @ColumnInfo(name = "lastname")
    private String lastName;
    @ColumnInfo(name = "type")
    private String tipoUser;  //Premium or Standard
    @ColumnInfo(name = "email")
    private String email;
    @ColumnInfo(name = "password")
    private String password;
    /*@ColumnInfo(name = "lastlogin")
    private Date last_login;
    @ColumnInfo(name = "datejoined")
    private Date joined;*/
    @ColumnInfo(name = "superU")
    private Boolean is_superUser;
    @ColumnInfo(name = "staff")
    private Boolean is_staff;
    @ColumnInfo(name = "active")
    private Boolean is_active;
    /*@ColumnInfo(name = "groups")
    private List<String> groups;*/
    @ColumnInfo(name = "perms")
    private int user_permissions;


    public User(@NonNull String name) {this.user = name;}

    public User() {
        this.user = "";
        this.firstName = "";
        this.lastName = "";
        this.tipoUser = "standard";
        this.email = "";
        this.password = "";
        //this.last_login = null;
        //this.joined = null;
        this.is_active = true;
        this.is_staff = false;
        this.is_superUser = false;
        //this.groups = null;
        this.user_permissions = 0;
    }

    @NonNull
    public String getUser(){return this.user;}

    public void setUser(@NonNull String user) {
        this.user = user;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTipoUser() {
        return tipoUser;
    }

    public void setTipoUser(String tipoUser) {
        this.tipoUser = tipoUser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /*public Date getLast_login() {
        return last_login;
    }

    public void setLast_login(Date last_login) {
        this.last_login = last_login;
    }

    public Date getJoined() {
        return joined;
    }

    public void setJoined(Date joined) {
        this.joined = joined;
    }*/

    public Boolean getIs_superUser() {
        return is_superUser;
    }

    public void setIs_superUser(Boolean is_superUser) {
        this.is_superUser = is_superUser;
    }

    public Boolean getIs_staff() {
        return is_staff;
    }

    public void setIs_staff(Boolean is_staff) {
        this.is_staff = is_staff;
    }

    public Boolean getIs_active() {
        return is_active;
    }

    public void setIs_active(Boolean is_active) {
        this.is_active = is_active;
    }

    /*public List<String> getGroups() {
        return groups;
    }

    public void setGroups(List<String> groups) {
        this.groups = groups;
    }*/

    public int getUser_permissions() {
        return user_permissions;
    }

    public void setUser_permissions(int user_permissions) {
        this.user_permissions = user_permissions;
    }
}