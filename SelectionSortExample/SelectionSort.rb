#selection sort

people_arr = [["john", 150], ["betty", 130], ["chris", 140], ["thomas", 120], ["georgie", 70]]

def s_sort(people)
	arr_size = people.size
	min = 0

	for i in 0..arr_size
		for x in (i + 1)..arr_size
			if people[x - 1][1] < people [i - 1][1]
				min = people [x - 1][1]
				people[x - 1][1] = people[i - 1][1]
				people[i - 1][1] = min
			end
		end
	end
	people
end

p s_sort(people_arr)

