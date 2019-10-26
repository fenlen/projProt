package com.example.prots.ktProt

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.recyclerview.widget.LinearLayoutManager

import kotlinx.android.synthetic.main.fragment_main.*
import kotlinx.android.synthetic.main.activity_fragment.*
import kotlinx.android.synthetic.main.activity_fragment.view.*

data class Item(val name: String)

class MainFragment : Fragment() {

    private var fridgeItems = mutableListOf(
        Item("Eggs"),
        Item("Milk"),
        Item("Cheese"),
        Item("Butter")
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        retainInstance = true

    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? =
        inflater.inflate(R.layout.fragment_main, container, false)


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        list_recycler_view.apply {
            layoutManager = LinearLayoutManager(activity)
            adapter = ListAdapter(fridgeItems)
        }
        floatingButton?.setOnClickListener {
            addItem()
        }
    }

    private fun addItem() {
        val newItem = Item(inputText.text.toString())
        fridgeItems.add(newItem)
        Log.d("TAG", fridgeItems.toString())
    }
    companion object {
        fun newInstance(): MainFragment = MainFragment()
    }
}