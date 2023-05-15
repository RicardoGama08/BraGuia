package com.example.braguia.ui;

import android.annotation.SuppressLint;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.braguia.R;
import com.example.braguia.model.Pin;
import com.example.braguia.model.Trail;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class SinglePin extends Fragment implements OnMapReadyCallback {
    private static final String ARG_PIN = "pin";
    private Pin pin;
    private GoogleMap mMap;
    private SupportMapFragment mapFragment;

    public SinglePin() {}

    public static SinglePin newInstance(Pin pin) {
        SinglePin fragment = new SinglePin();
        Bundle args = new Bundle();
        args.putParcelable(ARG_PIN, pin);
        fragment.setArguments(args);
        return fragment;
    }

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            pin = getArguments().getParcelable(ARG_PIN);
        }
    }

    /*@Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.single_pin, container, false);
        ButterKnife.bind(this, v);
        return v;
    }*/

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.single_pin, container, false);

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) TextView nameTextView = view.findViewById(R.id.header_pin);
        nameTextView.setText(pin.getName());

        @SuppressLint({"MissingInflatedId", "LocalSuppress"}) TextView descTextView = view.findViewById(R.id.pin_desc);
        descTextView.setText(pin.getDesc());

        mapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.map_fragment);
        mapFragment.getMapAsync(this);

        return view;
    }

    /*@OnClick({ R.id.button_top_left, R.id.button_top_right, R.id.button_bottom_left,
            R.id.button_bottom_right })
    public void onClickOnButtons(View view) {
        if (view instanceof CustomButton) {
            String txt = ((CustomButton) view).getText().toString();
            if (txt.equals(question.getAnswer())) {
                Toast.makeText(getContext(), "Your answer is correct!",
                        Toast.LENGTH_LONG).show();
                this.getParentFragmentManager().popBackStack();
            } else {
                Toast.makeText(getContext(), "Your answer is wrong!",
                        Toast.LENGTH_SHORT).show();
                ((CustomButton) view).setWrong(true);
                view.invalidate();
            }
        }
    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        Pin p = getArguments().getParcelable("pin");
        setPin(p);
    }

    public void setPin(Pin pin) {
        pin = pin;
        List<String> l = new ArrayList<>(Arrays.asList(question.alternatives));
        Collections.shuffle(l);
        buttonTopLeft.setText(l.get(0));
        buttonTopRight.setText(l.get(1));
        buttonBottomLeft.setText(l.get(2));
        buttonBottomRight.setText(l.get(3));
        textViewQuestion.setText(question.getQuestion());
        questionImage.setImageBitmap(BitmapFactory.decodeResource(this.getResources(),
                quest.getImageId()));
    }*/

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        LatLng coordinates = new LatLng(pin.getLat(), pin.getLng()); // replace with your desired coordinates
        float altitude = pin.getAlt(); // set the altitude in meters
        MarkerOptions markerOptions = new MarkerOptions()
                .position(coordinates)
                .title("My Marker")
                .zIndex(altitude);
        googleMap.addMarker(markerOptions);
        googleMap.moveCamera(CameraUpdateFactory.newLatLng(coordinates));
    }

}