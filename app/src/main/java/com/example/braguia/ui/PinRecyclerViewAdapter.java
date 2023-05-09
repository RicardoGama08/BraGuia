package com.example.braguia.ui;

import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.braguia.R;
import com.example.braguia.model.Pin;
import com.example.braguia.model.Trail;
import com.squareup.picasso.Picasso;
import java.util.List;

public class PinRecyclerViewAdapter extends RecyclerView.Adapter<PinRecyclerViewAdapter.ViewHolder> {

    private final List<Pin> mValues;

    public PinRecyclerViewAdapter(List<Pin> items) {
        mValues = items;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_item_pins, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.mIdView.setText(mValues.get(position).getId());
        holder.nameView.setText(mValues.get(position).getName());
        //Picasso.get().load(mValues.get(position).getImage_url().replace("http", "https")).into(holder.imageView);

        final Context context = holder.mView.getContext();
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int position = holder.getAdapterPosition();
                if (position != RecyclerView.NO_POSITION) {
                    Pin selectedPin = mValues.get(position);
                    SinglePin fragment = SinglePin.newInstance(selectedPin);
                    FragmentTransaction transaction = ((FragmentActivity) context).getSupportFragmentManager().beginTransaction();
                    transaction.replace(R.id.container, fragment);
                    transaction.addToBackStack(null);
                    transaction.commit();
                }
            }
        });

    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView mIdView;
        //public final ImageView imageView;
        public final TextView nameView;
        public Pin mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            mIdView = view.findViewById(R.id.item_number);
            //imageView = view.findViewById(R.id.cardimage);
            nameView = view.findViewById(R.id.nameP);
        }

        @Override
        public String toString() {
            return super.toString() + mIdView;
        }
    }
}