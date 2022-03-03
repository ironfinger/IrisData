from flask import Flask
import pandas as pd
import os
import numpy as np
import json

# Init:
app = Flask(__name__)
temp_path = os.path.join('temp')
df = pd.read_csv(os.path.join(temp_path, 'Mar-03-2022.csv'))

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/api/get-data')
def get_data():
    
    # Columns:
    columns = df.columns
    
    # Data Dictionary:
    data_dict = {}
    
    for col in columns:
        new_column = df[col].tolist()
        data_dict[col] = new_column
        
    column_names = columns.tolist()
    data_dict['ColumnNames'] = column_names[1:]
    
    return {'data': data_dict }
    

if __name__ == '__main__':
    app.run()
    
