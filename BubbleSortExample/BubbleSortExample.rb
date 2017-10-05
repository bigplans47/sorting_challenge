#bubble sort

def b_sort(people)
	number_of_people = people.length
	swapped = true
	
	while swapped do 
		swapped = false
		(number_of_people - 1).times do |i|
			if people[i][1] > people [i + 1][1]
				people[i], people [i + 1] = people [i + 1], people[i]
				swapped = true
			end
		end
	end
	people	
end

people_arr = [["john", 150], ["betty", 130], ["chris", 140], ["thomas", 120], ["georgie", 70]]

p b_sort(people_arr)

