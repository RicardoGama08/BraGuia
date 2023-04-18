package com.example.braguia.ui;

import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.braguia.R;
import com.example.braguia.model.Trail;
import com.squareup.picasso.Picasso;
import java.util.List;

public class TrailListAdapter extends RecyclerView.Adapter<TrailListAdapter.ViewHolder> {

    private final List<Trail> mValues;

    public TrailListAdapter(List<Trail> items) {
        mValues = items;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_item, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
        holder.mItem = mValues.get(position);
        holder.mIdView.setText(mValues.get(position).getId());
        Picasso.get().load(mValues.get(position).getUrl().replace("http", "https")).into(holder.imageView);
    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView mIdView;
        public final ImageView imageView;
        public Trail mItem;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            mIdView = (TextView) view.findViewById(R.id.item_number);
            imageView = view.findViewById(R.id.cardimage);
        }

        @Override
        public String toString() {
            return super.toString() + mIdView;
        }
    }
}