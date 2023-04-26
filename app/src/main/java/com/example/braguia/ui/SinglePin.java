package com.example.braguia.ui;

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

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class SinglePin extends Fragment {

    @BindView(R.id.pin1)
    ImageView img1;

    @BindView(R.id.pin2)
    ImageView img2;

    @BindView(R.id.pin3)
    ImageView img3;

    @BindView(R.id.pin4)
    ImageView img4;

    @BindView(R.id.desc)
    TextView descricao;

    @BindView(R.id.localizacao)
    TextView localizacao;

    @BindView(R.id.media)
    TextView midia;

    @BindView(R.id.propriedades)
    TextView props;

    //@BindView(R.id.button_bottom_right)
    //CustomButton buttonBottomRight;

    Pin pin;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.single_pin, container, false);
        ButterKnife.bind(this, v);
        return v;
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

}