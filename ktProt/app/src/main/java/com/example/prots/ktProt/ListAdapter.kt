package com.example.prots.ktProt

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ListAdapter(private val list: List<Item>)
    : RecyclerView.Adapter<ItemViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ItemViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        return ItemViewHolder(inflater, parent)
    }

    override fun onBindViewHolder(holder: ItemViewHolder, position: Int) {
        val item: Item = list[position]
        holder.bind(item)
    }

    override fun getItemCount(): Int = list.size

}

class ItemViewHolder(inflater: LayoutInflater, parent: ViewGroup) :
    RecyclerView.ViewHolder(inflater.inflate(R.layout.list_item, parent, false)) {
    private var mItemView: TextView? = null



    init {
        mItemView = itemView.findViewById(R.id.list_name)
    }

    fun bind(item: Item) {
        mItemView?.text = item.name
    }

}