package com.example.braguia.ui;

import android.annotation.SuppressLint;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.braguia.R;
import com.example.braguia.model.Edges;
import com.example.braguia.model.Pin;
import com.example.braguia.model.Trail;
import com.google.android.gms.maps.CameraUpdate;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapView;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.model.PolylineOptions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class SingleTrail extends Fragment implements OnMapReadyCallback {

    private static final String ARG_TRAIL = "trail";
    private Trail trail;
    private GoogleMap mMap;
    private SupportMapFragment mapFragment;

    public SingleTrail() {}

    public static SingleTrail newInstance(Trail trail) {
        SingleTrail fragment = new SingleTrail();
        Bundle args = new Bundle();
        args.putParcelable(ARG_TRAIL, trail);
        fragment.setArguments(args);
        return fragment;
    }

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            trail = getArguments().getParcelable(ARG_TRAIL);
        }
    }

    /*@Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.single_trail, container, false);
        ButterKnife.bind(this, v);
        return v;
    }*/

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.single_trail, container, false);
        //TextView nameTextView = view.findViewById(R.id.desc);
        //nameTextView.setText(trail.getName());

        //TextView mapLinkTextView = view.findViewById(R.id.map_pin);
        //String mapLink = trail.createMapLink();
        //mapLinkTextView.setText(mapLink);

        mapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.map_fragment);
        if (mapFragment == null) {
            mapFragment = SupportMapFragment.newInstance();
            getChildFragmentManager().beginTransaction()
                    .replace(R.id.map_fragment, mapFragment)
                    .commit();
        }
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
        Trail t = getArguments().getParcelable("trail");
        setTrail(t);
    }

    public void setTrail(Trail trail) {
        trail = trail;
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
        addTrailToMap();
    }

    private void addTrailToMap() {
        if (mMap == null || trail == null) {
            return;
        }

        PolylineOptions polylineOptions = new PolylineOptions()
                .color(Color.BLUE)
                .width(5);

        for (int i = 0; i < trail.getEdges().size(); i++) {
            Edges edge = trail.getEdges().get(i);
            Pin startPin = edge.getEdge_start();
            Pin endPin = edge.getEdge_end();

            if (startPin == null || endPin == null) {
                continue;
            }

            LatLng startLatLng = new LatLng(startPin.getLat(), startPin.getLng());
            LatLng endLatLng = new LatLng(endPin.getLat(), endPin.getLng());

            MarkerOptions startMarkerOptions = new MarkerOptions()
                    .position(startLatLng)
                    .title("Start Pin " + (i + 1))
                    .snippet("Altitude: " + startPin.getAlt());
            mMap.addMarker(startMarkerOptions);

            MarkerOptions endMarkerOptions = new MarkerOptions()
                    .position(endLatLng)
                    .title("End Pin " + (i + 1))
                    .snippet("Altitude: " + endPin.getAlt());
            mMap.addMarker(endMarkerOptions);

            polylineOptions.add(startLatLng);

            if (i == trail.getEdges().size() - 1) {
                polylineOptions.add(endLatLng);
            }
        }

        if (!trail.getEdges().isEmpty()) {
            LatLng initialLatLng = new LatLng(trail.getEdges().get(0).getEdge_start().getLat(), trail.getEdges().get(0).getEdge_start().getLng());
            CameraUpdate cameraUpdate = CameraUpdateFactory.newLatLngZoom(initialLatLng, 12);
            mMap.moveCamera(cameraUpdate);
        }

        mMap.addPolyline(polylineOptions);
    }

}
