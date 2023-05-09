package com.example.braguia.ui;

import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentTransaction;
import androidx.navigation.Navigation;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.braguia.R;
import com.example.braguia.model.Trail;
import com.squareup.picasso.Picasso;

import java.util.List;

public class TrailsRecyclerViewAdapter extends RecyclerView.Adapter<TrailsRecyclerViewAdapter.ViewHolder> {

    private final List<Trail> mValues;

    public TrailsRecyclerViewAdapter(List<Trail> items) {
        mValues = items;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_item_trails, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.mIdView.setText(mValues.get(position).getId());
        holder.nameView.setText(mValues.get(position).getName());
        Picasso.get().load(mValues.get(position)
                        .getUrl().replace("http", "https"))
                .into(holder.imageView);

        final Context context = holder.mView.getContext();
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int position = holder.getAdapterPosition();
                if (position != RecyclerView.NO_POSITION) {
                    Trail selectedTrail = mValues.get(position);
                    SingleTrail fragment = SingleTrail.newInstance(selectedTrail);
                    FragmentTransaction transaction = ((FragmentActivity) context).getSupportFragmentManager().beginTransaction();
                    transaction.replace(R.id.container, fragment);
                    transaction.addToBackStack(null);
                    transaction.commit();
                }
            }
        });

        /*holder.itemView.setOnClickListener( view -> {
            Bundle bundle = new Bundle();
            bundle.putParcelable("trail", (Parcelable) mValues.get(position));
            Navigation.findNavController(view).navigate(R.id.select_trail, bundle);
        });*/

    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView mIdView;
        public final ImageView imageView;
        public  final TextView nameView;
        public Trail mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            mIdView = view.findViewById(R.id.item_number);
            imageView = view.findViewById(R.id.cardimage);
            nameView = view.findViewById(R.id.nameP);
        }

        @Override
        public String toString() {
            return super.toString() + mIdView;
        }
    }
}