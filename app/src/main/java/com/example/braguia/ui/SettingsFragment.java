package com.example.braguia.ui;

import android.os.Bundle;

import androidx.preference.EditTextPreference;
import androidx.preference.ListPreference;
import androidx.preference.Preference;
import androidx.preference.PreferenceFragmentCompat;
import androidx.preference.SwitchPreferenceCompat;

import com.example.braguia.R;

public class SettingsFragment extends PreferenceFragmentCompat {

    @Override
    public void onCreatePreferences(Bundle savedInstanceState, String rootKey) {
        setPreferencesFromResource(R.xml.settings, rootKey);

        // Retrieve individual preferences and add listeners if needed
        SwitchPreferenceCompat notificationsPref = findPreference("pref_key_notifications");
        SwitchPreferenceCompat darkModePref = findPreference("pref_key_dark_mode");
        ListPreference themePref = findPreference("pref_key_language");
        EditTextPreference usernamePref = findPreference("pref_key_username");
        EditTextPreference emailPref = findPreference("pref_key_email");
        Preference changePasswordPref = findPreference("pref_key_change_password");
        Preference deleteAccountPref = findPreference("pref_key_delete_account");

        // Example: Listen for changes in the notifications preference
        notificationsPref.setOnPreferenceChangeListener((preference, newValue) -> {
            boolean enabled = (boolean) newValue;
            // Perform actions based on the new value
            return true; // Return true to update the preference value
        });

        // Example: Listen for changes in the email preference
        emailPref.setOnPreferenceChangeListener((preference, newValue) -> {
            String newEmail = (String) newValue;
            // Update the email address in your app's database or perform other actions
            return true; // Return true to update the preference value
        });

        // Example: Handle clicks on the "Change Password" preference
        changePasswordPref.setOnPreferenceClickListener(preference -> {
            // Navigate to the change password screen or show a dialog to change the password
            return true; // Return true to consume the click event
        });

        // Example: Handle clicks on the "Delete Account" preference
        deleteAccountPref.setOnPreferenceClickListener(preference -> {
            // Show a confirmation dialog and handle the account deletion process
            return true; // Return true to consume the click event
        });
    }

    @Override
    public void onResume() {
        super.onResume();
        // Update summary texts or perform any other updates if needed
    }
}