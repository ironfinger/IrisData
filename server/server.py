import os
import pandas as pd 
import numpy
from flask import Flask
import json


app = Flask(__name__)

@app.route("/api/get_table")
def rtn_table():
    data = pd.read_csv('Salary_Data.csv')
    
    data_dict = {}
    data_dict['colums'] = data.columns.tolist()

    for col in data.columns:
        data_dict[col] = data[col].to_list()

    return { 'data': data_dict }

if __name__ == "__main__":
    app.run()